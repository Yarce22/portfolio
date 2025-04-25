interface BuildEnv {
  DEPRECATED: string;
  [key: string]: string | undefined;
}

interface BuildSettings {
  cmd: string | null;
  dir: string | null;
  created_at: string;
  updated_at: string;
  private_logs: boolean | null;
  allowed_branches: string[];
  functions_dir: string | null;
  installation_id: string | null;
  skip_prs: boolean | null;
  untrusted_flow: string;
  base_rel_dir: boolean;
  stop_builds: boolean;
  public_repo: boolean;
  skip_automatic_builds: boolean | null;
  configuration_file_path: string | null;
  package_path: string | null;
  provider: string;
  env: BuildEnv;
  repo_type: string;
  repo_url: string;
  repo_branch: string;
  repo_path: string;
  repo_owner_type: string;
  repo_visual_editor_template: string | null;
  repo_template_required_extensions: string[] | null;
  repo_template_usage_url: string | null;
  repo_template_created_from_git_host: string | null;
  repo_template_created_from_slug: string | null;
  base: string | null;
  deploy_key_id: string | null;
}

interface HtmlSettings {
  pretty_urls: boolean;
}

interface ProcessingSettings {
  html: HtmlSettings;
  ignore_html_forms: boolean;
}

interface DeployLinks {
  permalink: string;
  alias: string | null;
  branch: string | null;
}

interface PublishedDeploy {
  id: string;
  site_id: string;
  build_id: string | null;
  state: string;
  name: string;
  url: string;
  ssl_url: string;
  admin_url: string;
  deploy_url: string;
  deploy_ssl_url: string;
  created_at: string;
  updated_at: string;
  user_id: string;
  error_message: string | null;
  required: string[];
  required_functions: string[];
  commit_ref: string | null;
  review_id: number | null;
  branch: string;
  commit_url: string | null;
  skipped: boolean | null;
  locked: boolean | null;
  title: string | null;
  commit_message: string | null;
  review_url: string | null;
  published_at: string | null;
  context: string;
  deploy_time: number | null;
  available_functions: [];
  screenshot_url: string | null;
  committer: string | null;
  skipped_log: string | null;
  manual_deploy: boolean;
  plugin_state: string;
  lighthouse_plugin_scores: Record<string, null> | null;
  links: DeployLinks;
  framework: string | null;
  entry_path: string | null;
  views_count: number | null;
  function_schedules: [];
  public_repo: boolean;
  pending_review_reason: string | null;
  lighthouse: Record<string, null> | null;
  edge_functions_present: boolean | null;
  expires_at: string | null;
  blobs_region: string | null;
}

interface Capabilities {
  cdn_tier: string;
  deploy_diagnostics: boolean;
  dev_server_enabled: boolean;
}

interface VersionInfo {
  active: string;
  default: string;
}

interface Versions {
  go: VersionInfo;
  node: VersionInfo;
  python: VersionInfo;
  ruby: VersionInfo;
  yarn: VersionInfo;
}

export interface NetlifySite {
  id: string;
  site_id: string;
  plan: string;
  ssl_plan: string | null;
  premium: boolean;
  claimed: boolean;
  name: string;
  custom_domain: string | null;
  branch_deploy_custom_domain: string | null;
  deploy_preview_custom_domain: string | null;
  domain_aliases: string[];
  sso_login: boolean;
  sso_login_context: string;
  notification_email: string | null;
  url: string;
  admin_url: string;
  deploy_id: string;
  build_id: string;
  deploy_url: string;
  state: string;
  screenshot_url: string | null;
  created_at: string;
  updated_at: string;
  user_id: string;
  error_message: string | null;
  ssl: boolean;
  ssl_url: string;
  force_ssl: boolean | null;
  ssl_status: string | null;
  max_domain_aliases: number;
  build_settings: BuildSettings;
  dev_server_settings: Record<string, null>;
  processing_settings: ProcessingSettings;
  prerender: string | null;
  prerender_headers: string | null;
  deploy_hook: string;
  published_deploy: PublishedDeploy | null;
  managed_dns: boolean;
  jwt_secret: string | null;
  jwt_roles_path: string;
  account_id: string;
  account_slug: string;
  account_name: string;
  account_type: string;
  capabilities: Capabilities;
  dns_zone_id: string | null;
  identity_instance_id: string | null;
  primary_create_project: boolean | null;
  use_functions: boolean | null;
  use_edge_handlers: boolean | null;
  use_forms: boolean | null;
  parent_user_id: string | null;
  automatic_tls_provisioning: boolean | null;
  disabled: boolean | null;
  disabled_reason: string | null;
  lifecycle_state: string;
  id_domain: string;
  use_lm: boolean | null;
  build_image: string;
  automatic_tls_provisioning_expired: boolean;
  analytics_instance_id: string | null;
  functions_region: string;
  functions_timeout: number | null;
  plugins: [];
  account_subdomain: string | null;
  cdp_enabled_contexts: string[];
  deploy_retention_in_days: number;
  build_timelimit: number | null;
  password_context: string;
  hud_enabled: boolean;
  labels: [];
  traffic_rules_config_per_scope: Record<string, null>;
  visual_editor_active: boolean | null;
  description: string | null;
  description_hidden: boolean | null;
  dev_server_resources: null | null;
  created_via: string | null;
  deploy_origin: Record<string, null>;
  cover_url: string | null;
  feature_flags: Record<string, boolean> | null;
  versions: Versions;
  has_password: boolean;
  default_domain: string;
  use_envelope: boolean;
}

export interface Project {
  id: string;
  name: string;
  url: string;
  screen: string;
}