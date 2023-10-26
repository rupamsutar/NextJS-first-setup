import { useRouter } from "next/router";

const ProjectPage = () => {

    const router = useRouter();
    console.log("router :", router);
    console.log( "router.pathname :", router.pathname)
    console.log( "router.query :", router.query);
    
    return (
        <div className="">
            <h1>The Portfolio Project Page</h1>
        </div>
    )
}

export default ProjectPage;