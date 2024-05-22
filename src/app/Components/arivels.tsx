// import Container from "@/components/Layouts/Container/Container";
import React, { useContext } from "react";
import Card from "../Components/Card/Card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { axiosContext } from "@/axiosData/axiosDataContext";

interface Props {
  products: ProductItem[] | null;
  type: string;
}

function NewArrivals(props: Props) {
  const { products, type } = props;
  return (
    <Container className="flex overflow-x-hidden bg-white justify-center items-center flex-col gap-[22px]">
      <h4 className="text-black   sm:w-auto   sm:items-center sm:text-5xl text-[32px] font-anton">
        {type}
      </h4>

      <Carousel opts={{ align: "start" }} className="w-full">
        <CarouselContent className="-ml-1">
          {products && products?.length > 0
            ? products.map((item) => (
                <CarouselItem
                  key={item._id}
                  className="pl-1 md:basis-1/3 lg:basis-1/4"
                >
                  <Card
                    id={item._id || ""}
                    key={item._id}
                    image={item.image}
                    name={item.name}
                    compoanyName={item.brand}
                    price={item.price}
                    rating={item.rating.rating}
                  />
                </CarouselItem>
              ))
            : Array.from({ length: 9 }).map((_, i) => (
                <CarouselItem
                  key={i}
                  className="pl-1 md:basis-1/3 lg:basis-1/4"
                >
                  <div
                    key={i}
                    className="w-[295px] h-[295px] bg-gray-100 rounded-[20px] animate-pulse"
                  />
                </CarouselItem>
              ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </Container>
  );
}

export default NewArrivals;
