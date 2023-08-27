import React from "react";
import Title from "../UI/Title";
import CategoryCard from "./CategoryCard";

const DUMAYDATA = [
  { id: 1, icon:'Design' ,category: "Design", jobs: "14 Job Available" },
  { id: 2, icon:'Sales' ,category: "Sales", jobs: "133 Job Available" },
  { id: 3, icon:'Finance' ,category: "Finance", jobs: "75 Job Available" },
  { id: 4, icon:'Marketing' ,category: "Marketing", jobs: "38 Job Available" },
  { id: 5, icon:'Engineering' ,category: "Engineering", jobs: "95 Job Available" },
  { id: 6, icon:'Business' ,category: "Business", jobs: "34 Job Available" },
  { id: 7, icon:'Technology' ,category: "Technology", jobs: "11 Job Available" },
  { id: 8, icon:'UI' ,category: "UI/UX", jobs: "98 Job Available" },
];

const Category = () => {
  return (
    <section className="flex flex-col gap-5 py-10">
      <Title title="Explore By" titleblue="Category" />
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-5">
        {DUMAYDATA.map((el) => (
          <CategoryCard key={el.id} category={el.category} jobs={el.jobs} />
        ))}
      </div>
    </section>
  );
};

export default Category;
