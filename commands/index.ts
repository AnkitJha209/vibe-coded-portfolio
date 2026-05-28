import echo from "./echo";
import clear from "./clear";
import pwd from "./pwd";
import history from "./history";
import ls from "./ls";
import cat from "./cat";
import open from "./open";
import repo from "./repo";
import live from "./live";
import skills from "./skills";
import experience from "./experience";
import education from "./education";
import contact from "./contact";
import social from "./social";
import resume from "./resume";
import banner from "./banner";
import hire from "./hire";
import sudo from "./sudo";
import git from "./git";
import hack from "./hack";
import matrix from "./matrix";
import coffee from "./coffee";
import vim from "./vim";
import ping from "./ping";
import date from "./date";
import uptime from "./uptime";
import top from "./top";
import whoami from "./whoami";
import help from "./help";
import projects from "./projects";

const registry: Record<string, any> = {
    whoami,
    help,
    projects,
    project: projects,
    echo,
    clear,
    pwd,
    history,
    ls,
    cat,
    open,
    repo,
    live,
    skills,
    experience,
    education,
    contact,
    social,
    resume,
    banner,
    hire,
    sudo,
    git,
    hack,
    matrix,
    coffee,
    vim,
    ping,
    date,
    uptime,
    top,
};

export default registry;
