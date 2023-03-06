import { Tab } from "@headlessui/react";
import { Header } from "components/Header";
import { Landing } from "components/Landing";
import ProductComponent from "components/Product";
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { fetchCategories } from "utils/fetchCategoris";
import { fetchProducts } from "utils/fetchProducts";
import { Product } from "./types/product";
import Basket from "components/Basket";

interface Props {
  categories: Category[];
  products: Product[];
}

const Home = ({ categories, products }: Props) => {
  const showProducts = (category: number) => {
    return products
      ?.filter((product) => product.category._ref === categories[category]._id)
      ?.map((item: any) => <ProductComponent product={item} key={item.id} />);
  };

  return (
    <div className="">
      <Head>
        <title>Apple RedeSign</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Basket />
      <main className="relative h-[200vh] bg-[#E7ECEE]">
        <Landing />
      </main>
      <section className="relative z-40 -mt-[100vh] min-h-screen bg-[#181818]">
        <div className="space-y-10 py-16">
          <h1 className="text-center text-4xl font-medium tracking-wide text-white md:text-5xl">
            New Promos
          </h1>
          <Tab.Group vertical>
            <Tab.List className="flex justify-center">
              {categories?.map((item: any) => (
                <Tab
                  key={item._id}
                  id={item._id}
                  className={({ selected }) =>
                    `whitespace-nowrap rounded-t-lg py-3 px-5 text-sm font-light outline-none md:py-4 md:px-6 md:text-base ${
                      selected
                        ? "borderGradient bg-[#35383C] text-white"
                        : "border-b-2 border-[#35383C] text-[#747474]"
                    }`
                  }
                >
                  {item.title}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="mx-auto max-w-fit pt-10 pb-24 sm:px-4">
              <Tab.Panel className="tabPanel">{showProducts(0)}</Tab.Panel>
              <Tab.Panel className="tabPanel">{showProducts(1)}</Tab.Panel>
              <Tab.Panel className="tabPanel">{showProducts(2)}</Tab.Panel>
              <Tab.Panel className="tabPanel">{showProducts(3)}</Tab.Panel>
              <Tab.Panel className="tabPanel">{showProducts(4)}</Tab.Panel>
              <Tab.Panel className="tabPanel">{showProducts(5)}</Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </section>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const categories = await fetchCategories();
  const products = await fetchProducts();
  return {
    props: {
      categories,
      products,
    },
  };
};
