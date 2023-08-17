import {
    alias_components_answers,
    alias_components_auth,
    alias_components_categories,
    alias_components_discussions,
    alias_components_modals,
    alias_components_nav,
    alias_components_profile, alias_components_progress,
    alias_components_questions, alias_components_snack, alias_components_toggle, alias_components_users, alias_data,
    alias_firebase, alias_global_css,
    alias_helpers,
    alias_mobx, alias_pages, alias_types,
    alias_utils
} from "../../../webpack.paths";

export const resolve = {
    alias: {
        // Alias
        "@helpers": alias_helpers,
        "@mobx": alias_mobx,
        "@firebase-config": alias_firebase,
        "@utils": alias_utils,
        "@types": alias_types,
        "@pages": alias_pages,
        "@data": alias_data,

        // Components Alias
        "@components-discussions": alias_components_discussions,
        "@components-answers": alias_components_answers,
        "@components-categories": alias_components_categories,
        "@components-auth": alias_components_auth,
        "@components-modals": alias_components_modals,
        "@components-nav": alias_components_nav,
        "@components-profile": alias_components_profile,
        "@components-questions": alias_components_questions,
        "@components-users": alias_components_users,
        "@components-toggle": alias_components_toggle,
        "@components-snack": alias_components_snack,
        "@components-progress": alias_components_progress,

        // Global Css Alias
        "@global-css": alias_global_css
    },
    extensions: [".tsx", ".ts", ".js"],
};