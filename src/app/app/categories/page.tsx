import { auth } from "@/auth";
import AddCategory from "@/components/categories/AddCategory";
import { getUserCategories } from "@/lib/CategoriesAction";

const page = async () => {
  const session = await auth();
  // const categories = await getUserCategories({ email: session?.user?.email });
  return (
    <>
      <div className="mt-20 border border-gray-200 p-10 rounded-md">
        <AddCategory />
      </div>
    </>
  );
};

export default page;
