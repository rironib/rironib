import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

const allowedOrigins = ["https://www.sitelike.me", "http://localhost:3000"];

export async function OPTIONS(req) {
  const origin = req.headers.get("origin") || "";
  if (!allowedOrigins.includes(origin)) {
    return new NextResponse(null, {
      status: 403,
    });
  }

  return new NextResponse(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": origin,
      "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}

export async function POST(req) {
  const origin = req.headers.get("origin") || "";
  if (!allowedOrigins.includes(origin)) {
    return NextResponse.json({ error: "Origin not allowed" }, { status: 403 });
  }

  const client = await clientPromise;
  const db = client.db("RonibDB");
  const contactDB = db.collection("contactDB");

  const body = await req.json();
  if (!body) {
    return NextResponse.json({ error: "No data provided" }, { status: 400 });
  }

  const result = await contactDB.insertOne(body);
  return new NextResponse(
    JSON.stringify({
      message: "Submitted successfully.",
      insertedId: result.insertedId,
    }),
    {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": origin,
      },
    },
  );
}

export async function GET(req) {
  const origin = req.headers.get("origin") || "";
  if (!allowedOrigins.includes(origin)) {
    return NextResponse.json({ error: "Origin not allowed" }, { status: 403 });
  }

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

    return new NextResponse(JSON.stringify({ total, totalPages, data }), {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": origin,
      },
    });
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 },
    );
  }
}
