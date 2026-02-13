"use client";

import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@heroui/react";
import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ProjectCard({ project }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <div className="flex h-max flex-col gap-4 rounded-xl bg-default-100 p-6">
        <div
          className="cursor-pointer overflow-hidden rounded-xl"
          onClick={onOpen}
        >
          <Image
            src={project.image}
            alt={project.title}
            className="rounded-xl transition-transform duration-300 hover:scale-105"
            width={1280}
            height={1080}
          />
        </div>
        <h3 className="text-xl font-bold">{project.title}</h3>
        <p className="text-slate-400">{project.description}</p>
        <div className="flex flex-col items-center justify-between gap-4 lg:flex-row">
          <div className="text-slate-300">{project.stack}</div>
          <Button onPress={onOpen} color="primary" variant="flat">
            Details
          </Button>
        </div>
      </div>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="4xl"
        scrollBehavior="inside"
        backdrop="blur"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {project.title}
              </ModalHeader>
              <ModalBody>
                <div className="space-y-6">
                  {/* Carousel */}
                  <div className="relative aspect-video w-full overflow-hidden rounded-xl">
                    <Swiper
                      modules={[Navigation, Pagination, Autoplay]}
                      navigation
                      pagination={{ clickable: true }}
                      autoplay={{ delay: 3000, disableOnInteraction: false }}
                      className="h-full w-full"
                    >
                      {project.gallery?.map((img, idx) => (
                        <SwiperSlide key={idx}>
                          <div className="relative h-full w-full">
                            <Image
                              src={img}
                              alt={`${project.title} screenshot ${idx + 1}`}
                              fill
                              className="object-contain"
                              sizes="(max-width: 1024px) 100vw, 80vw"
                            />
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>

                  <div className="space-y-4">
                    <p className="text-lg text-default-600">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 font-semibold text-primary">
                      {project.stack.split(", ").map((tech, i) => (
                        <span
                          key={i}
                          className="rounded-full bg-primary/10 px-3 py-1 text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                {project.link !== "#" && (
                  <Button
                    as="a"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    color="primary"
                  >
                    Visit Site
                  </Button>
                )}
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
