import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(req) {
  const client = await clientPromise;
  const db = client.db("RonibDB");
  const contactDB = db.collection("contactDB");

  const body = await req.json();

  if (!body || Object.keys(body).length === 0) {
    return NextResponse.json({ error: "No data provided" }, { status: 400 });
  }

  body.createdAt = new Date();

  try {
    const result = await contactDB.insertOne(body);
    return NextResponse.json({
      message: "Submitted successfully.",
      insertedId: result.insertedId,
    });
  } catch (err) {
    return NextResponse.json(
      { error: "Database insert failed" },
      { status: 500 },
    );
  }
}

export async function GET(req) {
  const client = await clientPromise;
  const db = client.db("RonibDB");
  const contactDB = db.collection("contactDB");

  const { searchParams } = new URL(req.url);
  const page = parseInt(searchParams.get("page") || "1");
  const pageSize = parseInt(searchParams.get("pageSize") || "20");
  const skip = (page - 1) * pageSize;

  try {
    const data = await contactDB
      .find()
      .sort({ updatedAt: -1 })
      .skip(skip)
      .limit(pageSize)
      .toArray();

    const total = await contactDB.countDocuments();
    const totalPages = Math.ceil(total / pageSize);

    return NextResponse.json({ total, totalPages, data });
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to fetch contact data" },
      { status: 500 },
    );
  }
}
