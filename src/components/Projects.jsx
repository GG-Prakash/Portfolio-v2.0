import React from 'react';
import ProjectsCard from './ProjectsCard';

const projects = [
  {
    title: 'AWS 3-tier Webpplication Architecture',
    des: 'Deployed secure 3-tier AWS app using VPCs, ALBs, RDS, and ACM for scalable and isolated routing.',
    src: '/projects/shopsite.png',
    projLink: 'https://natarajanandco.com/',
    gitLink: 'https://github.com/Kabileshwaran183/P15-Ecommerce-site',
    tools: ['EC2', ' RDS', 'ALB', ' VPC', 'R53', 'ACM']
  },
  {
    title: 'CI/CD Pipeline Automation using Jenkins & Kubernetes',
    des: 'Automated CI/CD pipeline with Jenkins, Docker, and K8s, integrating code to deployment seamlessly.',
    src: '/projects/devops-architecture.png',
    projLink: 'public/live/Devops project.drawio (1).svg',
    gitLink: 'https://github.com/GG-Prakash/Projects',
    tools: ['Jenkins', ' GitHub', ' Docker', 'SonarQube', 'Trivy', 'EC2', 'ECR', 'Kops', 'Kubernetes']
  },
  {
    title: 'Multi-Branch DevOps Infrastructure with Terraform & Jenkins',
    des: 'Built multi-branch AWS infra using Terraform and Jenkins with GitHub webhooks and IAM access control.',
    src: '/projects/Recipeapp.png',
    projLink: 'https://p5-recipe-app.netlify.app/',
    gitLink: 'https://github.com/Kabileshwaran183/P5-Recipe-App',
    tools: ['VPC', 'EC2', 'Terraform', 'IAM', 'GitHub']
  }
];

const Projects = () => {
  return (
    <section id="projects" className="sectioneven relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyan-900/20 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-7xl mx-auto z-10 relative">
        <div className="flex flex-col items-center mb-16 pt-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Featured Projects</h2>
          <div className="w-24 h-1 bg-cyan-500 rounded-full mb-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectsCard
              key={index}
              title={project.title}
              des={project.des}
              src={project.src}
              projLink={project.projLink}
              gitLink={project.gitLink}
              tools={project.tools}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
