import PeriodProvider from "../components/project/register/PeriodProvider";
import ProjectRegister from "../components/project/register/ProjectRegister";

function ProjectRegisterPage() {
    return (
        <PeriodProvider>
            <ProjectRegister />
        </PeriodProvider>
    )
}

export default ProjectRegisterPage;