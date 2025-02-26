import { FileNode } from 'gatsby-plugin-image/dist/src/components/hooks';

/**
 * Possible properties for a page object in strudel-config.json.
 */
export interface StrudelPage {
  name: string;
  path: string;
  markdownId?: string;
  layoutComponent?: string;
  redirectTo?: string;
  /** 
   * The parent property is only present when pages are 
   * retrieved or flattened with one of the util functions 
   */
  parent?: StrudelPage;
  children?: StrudelPage[];
}

/**
 * Properties that can exist in the markdown frontmatter
 * for a Task Flow.
 */
export interface TaskFlowFrontmatter {
  id?: string;
  title?: string;
  tagline?: string;
  tags?: string[];
  intent?: string;
  exampleUrl?: string;
  codeUrl?: string;
  figmaUrl?: string;
  iconImage?: string | FileNode;
}

/**
 * Properties that can exist in the markdown frontmatter
 * for a typical page.
 */
export interface PageFrontmatter {
  id?: string;
  title?: string;
  subtitle?: string;
}