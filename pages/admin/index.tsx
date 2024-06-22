import ContentWrapper from "@/components/admin/ContentWrapper";
import LatestPostListCard from "@/components/admin/LatestPostListCard";
import AdminNav from "@/components/common/nav/AdminNav";
import AdminLayout from "@/components/layout/AdminLayout";
import { NextPage } from "next";

interface Props {}

const Admin: NextPage<Props> = () => {
  return (
    <AdminLayout>
      <div className="flex space-x-10">
        <ContentWrapper seeAllRoute="/admin" title="Latest Posts">
          <LatestPostListCard
            title="This is my title"
            slug="this-is-slug"
            meta="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, cupiditate ratione blanditiis aliquam laudantium voluptate nemo commodi delectus mollitia cumque ipsam rem tempore ipsum veniam eos quos doloribus culpa ullam dicta est aut sequi magnam atque recusandae! Quisquam blanditiis voluptatum praesentium molestiae quod, repudiandae odit suscipit quo fugit molestias assumenda nihil dolorem cum adipisci libero unde dolores quae veritatis. Sed doloribus pariatur quidem voluptates eaque, error in sit quae id, quos reiciendis consequuntur culpa explicabo? Illum iure totam obcaecati tempore velit quae consectetur? Est consequuntur dolor autem accusantium magni, eos incidunt cupiditate. Non est, iure beatae dolorum voluptates ex dolorem vitae illum inventore animi ut laborum? Sequi maiores esse asperiores modi? Ducimus saepe alias necessitatibus totam suscipit rerum, ex dolore non beatae nesciunt molestiae et laudantium odio ipsa neque voluptatum soluta quam ad at similique asperiores! Totam, provident neque quod repellat ut debitis eum non. Dignissimos, est suscipit enim id temporibus aperiam sequi placeat a sed ab sit nobis? Amet perferendis fuga nobis velit sed enim impedit possimus illum magni, ipsam nemo quasi autem. Accusantium provident recusandae, quisquam voluptatum ab illo. Tenetur eum incidunt deleniti iste, laudantium laborum unde sit consequatur possimus fuga! Voluptatibus aut assumenda iusto nesciunt blanditiis nemo!"
          />
        </ContentWrapper>

        <ContentWrapper seeAllRoute="/admin" title="Latest Comments">
          <></>
        </ContentWrapper>
      </div>
    </AdminLayout>
  );
};

export default Admin;
