import path from "path";

// Plugins
export const HTMLWebpackPluginPath = path.resolve( __dirname, "public", "index.html" );
export const EntryWebpackPath = path.resolve( __dirname, "src", "index.tsx" );
export const OutputWebpackPath = path.resolve( __dirname, "build" );

// Alias
export const alias_helpers = path.resolve( __dirname, "src", "helpers" );
export const alias_mobx = path.resolve( __dirname, "src", "mobx" );
export const alias_firebase = path.resolve( __dirname, "src", "firebase" );
export const alias_utils = path.resolve( __dirname, "src", "utils" );
export const alias_types = path.resolve( __dirname, "src", "types" );
export const alias_pages = path.resolve( __dirname, "src", "pages" );
export const alias_data = path.resolve( __dirname, "src", "data" );

// Components Alias
export const alias_components_discussions = path.resolve( __dirname, "src", "components", "discussions" );
export const alias_components_answers = path.resolve( __dirname, "src", "components", "answers" );
export const alias_components_categories = path.resolve( __dirname, "src", "components", "categories" );
export const alias_components_auth = path.resolve( __dirname, "src", "components", "auth" );
export const alias_components_modals = path.resolve( __dirname, "src", "components", "modals" );
export const alias_components_nav = path.resolve( __dirname, "src", "components", "nav" );
export const alias_components_profile = path.resolve( __dirname, "src", "components", "profile" );
export const alias_components_questions = path.resolve( __dirname, "src", "components", "questions" );
export const alias_components_users = path.resolve( __dirname, "src", "components", "users" );
export const alias_components_toggle = path.resolve( __dirname, "src", "components", "toggle" );
export const alias_components_snack = path.resolve( __dirname, "src", "components", "snackbar" );
export const alias_components_progress = path.resolve( __dirname, "src", "components", "progress" );

// Global Css Alias
export const alias_global_css = path.resolve( __dirname, "styles", "global.css" );

