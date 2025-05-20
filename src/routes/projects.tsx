import { createFileRoute } from '@tanstack/react-router';
import { ProjectsPage } from '../pages/projects-page';

export const Route = createFileRoute('/projects')({
  component: ProjectsPage,
}); 