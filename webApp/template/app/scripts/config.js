function configState($stateProvider, $urlRouterProvider, $compileProvider) {

    // Optimize load start with remove binding information inside the DOM element
    $compileProvider.debugInfoEnabled(true);

    // Set default state
    $urlRouterProvider.otherwise("/dashboard");
    $stateProvider

        // Landing page
        .state('landing', {
            url: "/landing_page",
            templateUrl: "views/landing_page.html",
            data: {
                pageTitle: 'Landing page',
                specialClass: 'landing-page'
            }
        })

        // Dashboard - Main page
        .state('dashboard', {
            url: "/dashboard",
            templateUrl: "views/dashboard.html",
            data: {
                pageTitle: 'Dashboard'
            }
        })

        // Analytics
        .state('analytics', {
            url: "/analytics",
            templateUrl: "views/analytics.html",
            data: {
                pageTitle: 'Analytics'
            }
        })

        // Widgets
        .state('widgets', {
            url: "/widgets",
            templateUrl: "views/widgets.html",
            data: {
                pageTitle: 'Widgets'
            }
        })

        // Widgets
        .state('options', {
            url: "/options",
            templateUrl: "views/options.html",
            data: {
                pageTitle: 'Options',
                pageDesc: 'Example small header for demo purpose.'
            }
        })

        // Interface
        .state('interface', {
            abstract: true,
            url: "/interface",
            templateUrl: "views/common/content.html",
            data: {
                pageTitle: 'Interface'
            }
        })
        .state('interface.buttons', {
            url: "/buttons",
            templateUrl: "views/interface/buttons.html",
            data: {
                pageTitle: 'Colors and Buttons',
                pageDesc: 'The basic color palette'
            }
        })
        .state('interface.typography', {
            url: "/typography",
            templateUrl: "views/interface/typography.html",
            data: {
                pageTitle: 'Typography',
                pageDesc: 'The basic elements of typography'
            }
        })
        .state('interface.components', {
            url: "/components",
            templateUrl: "views/interface/components.html",
            data: {
                pageTitle: 'Components',
                pageDesc: 'Tabs, according, collapse and other UI components'
            }
        })
        .state('interface.icons', {
            url: "/icons",
            templateUrl: "views/interface/icons.html",
            data: {
                pageTitle: 'Icons',
                pageDesc: 'Two great icon libraries. Pe-icon-7-stroke and Font Awesome'
            }
        })
        .state('interface.panels', {
            url: "/panels",
            templateUrl: "views/interface/panels.html",
            data: {
                pageTitle: 'Panels',
                pageDesc: 'Two great icon libraries. Pe-icon-7-stroke and Font Awesome'
            }
        })
        .state('interface.alerts', {
            url: "/alerts",
            templateUrl: "views/interface/alerts.html",
            data: {
                pageTitle: 'Alerts',
                pageDesc: 'Notification and custom alerts'
            }
        })
        .state('interface.modals', {
            url: "/modals",
            templateUrl: "views/interface/modals.html",
            data: {
                pageTitle: 'Modals',
                pageDesc: 'Modal window examples'
            }
        })
        .state('interface.loading_buttons', {
            url: "/loading_buttons",
            templateUrl: "views/interface/loading_buttons.html",
            data: {
                pageTitle: 'Ladda',
                pageDesc: 'Loading buttons'
            }
        })
        .state('interface.list', {
            url: "/list",
            templateUrl: "views/interface/list.html",
            data: {
                pageTitle: 'Nestable list',
                pageDesc: 'Nestable - Drag & drop hierarchical list.'
            }
        })

        .state('interface.tour', {
            url: "/tour",
            templateUrl: "views/interface/tour.html",
            data: {
                pageTitle: 'Tour',
                pageDesc: 'The easiest way to show people how to use your website.'
            }
        })

        .state('interface.draggable_panels', {
            url: "/draggable_panels",
            templateUrl: "views/interface/draggable_panels.html",
            data: {
                pageTitle: 'Draggable panels',
                pageDesc: 'Example page for draggable panels'
            }
        })

        .state('interface.code_editor', {
            url: "/code_editor",
            templateUrl: "views/interface/code_editor.html",
            data: {
                pageTitle: 'Code editor',
                pageDesc: 'Versatile text editor implemented in JavaScript for the browser.'
            }
        })

        // App views
        .state('app_views', {
            abstract: true,
            url: "/app_views",
            templateUrl: "views/common/content.html",
            data: {
                pageTitle: 'App Views'
            }
        })
        .state('app_views.timeline', {
            url: "/timeline",
            templateUrl: "views/app_views/timeline.html",
            data: {
                pageTitle: 'Timeline',
                pageDesc: 'Present your events in timeline style.'
            }
        })
        .state('app_views.contacts', {
            url: "/contacts",
            templateUrl: "views/app_views/contacts.html",
            data: {
                pageTitle: 'Contacts',
                pageDesc: 'Show users list in nice and color panels'
            }
        })
        .state('app_views.profile', {
            url: "/profile",
            templateUrl: "views/app_views/profile.html",
            data: {
                pageTitle: 'Profile',
                pageDesc: 'Show user data in clear profile design'
            }
        })
        .state('app_views.calendar', {
            url: "/calendar",
            templateUrl: "views/app_views/calendar.html",
            data: {
                pageTitle: 'Calendar',
                pageDesc: 'Full-sized, drag & drop event calendar.'
            }
        })
        .state('app_views.projects', {
            url: "/projects",
            templateUrl: "views/app_views/projects.html",
            data: {
                pageTitle: 'Projects',
                pageDesc: 'List of projects.'
            }
        })
        .state('app_views.project_detail', {
            url: "/project_detail",
            templateUrl: "views/app_views/project_detail.html",
            data: {
                pageTitle: 'Project detail',
                pageDesc: 'Special page for project detail.'
            }
        })
        .state('app_views.app_plans', {
            url: "/app_plans",
            templateUrl: "views/app_views/app_plans.html",
            data: {
                pageTitle: 'App plans',
                pageDesc: 'Present pricing option for your app'
            }
        })
        .state('app_views.social_board', {
            url: "/social_board",
            templateUrl: "views/app_views/social_board.html",
            data: {
                pageTitle: 'Social board',
                pageDesc: 'Message board for social interactions.'
            }
        })
        .state('app_views.blog', {
            url: "/blog",
            templateUrl: "views/app_views/blog.html",
            data: {
                pageTitle: 'Blog',
                pageDesc: 'Article board for blog page.'
            }
        })
        .state('blog_details', {
            url: "/blog_details",
            templateUrl: "views/app_views/blog_details.html",
            data: {
                pageTitle: 'Article',
                pageDesc: 'Article blog page.'
            }
        })
        .state('app_views.forum', {
            url: "/forum",
            templateUrl: "views/app_views/forum.html",
            data: {
                pageTitle: 'Forum',
                pageDesc: 'Topics board for forum page.'
            }
        })
        .state('app_views.forum_details', {
            url: "/forum_details",
            templateUrl: "views/app_views/forum_details.html",
            data: {
                pageTitle: 'Topic',
                pageDesc: 'Topic for forum page.'
            }
        })
        .state('app_views.gallery', {
            url: "/gallery",
            templateUrl: "views/app_views/gallery.html",
            data: {
                pageTitle: 'Galery',
                pageDesc: 'Touch-enabled, responsive and customizable image & video gallery.'
            }
        })

        .state('app_views.notes', {
            url: "/notes",
            templateUrl: "views/app_views/notes.html",
            data: {
                pageTitle: 'Notes',
                pageDesc: 'Build notebook functionality in your app'
            }
        })

        .state('app_views.mailbox', {
            url: "/mailbox",
            templateUrl: "views/app_views/mailbox.html",
            data: {
                pageTitle: 'Mailbox',
                pageDesc: 'Mailbox - Email list.'
            }
        })

        .state('app_views.faq', {
            url: "/faq",
            templateUrl: "views/app_views/faq.html",
            data: {
                pageTitle: 'FAQ',
                pageDesc: 'FAQ page - build faq/support page for your app'
            }
        })

        .state('app_views.email_compose', {
            url: "/email_compose",
            templateUrl: "views/app_views/email_compose.html",
            data: {
                pageTitle: 'Mailbox',
                pageDesc: 'Mailbox - Email compose.'
            }
        })

        .state('app_views.email_view', {
            url: "/email_view",
            templateUrl: "views/app_views/email_view.html",
            data: {
                pageTitle: 'Mailbox',
                pageDesc: 'Mailbox - Email view.'
            }
        })

        .state('app_views.invoice', {
            url: "/invoice",
            templateUrl: "views/app_views/invoice.html",
            data: {
                pageTitle: 'Invoice',
                pageDesc: 'Clean invoice template.'
            }
        })

        .state('app_views.file_manager', {
            url: "/mailbox",
            templateUrl: "views/app_views/file_manager.html",
            data: {
                pageTitle: 'File manager',
                pageDesc: 'Show you files in a nica manager design.'
            }
        })

        .state('app_views.search', {
            url: "/search",
            templateUrl: "views/app_views/search.html",
            data: {
                pageTitle: 'Search view',
                pageDesc: 'Use search view to show search functionality.'
            }
        })

        .state('app_views.chat_view', {
            url: "/chat_view",
            templateUrl: "views/app_views/chat_view.html",
            data: {
                pageTitle: 'Chat view',
                pageDesc: 'Create a chat room in your app'
            }
        })

        // Transitions
        .state('transitions', {
            abstract: true,
            url: "/transitions",
            templateUrl: "views/common/content_blank.html",
            data: {
                pageTitle: 'Transitions'
            }
        })
        .state('transitions.overview', {
            url: "/overview",
            templateUrl: "views/transitions/overview.html",
            data: {
                pageTitle: 'Overview of transitions Effect'
            }
        })
        .state('transitions.transition_one', {
            url: "/transition_one",
            templateUrl: "views/transitions/transition_one.html"
        })
        .state('transitions.transition_two', {
            url: "/transition_two",
            templateUrl: "views/transitions/transition_two.html"
        })
        .state('transitions.transition_three', {
            url: "/transition_three",
            templateUrl: "views/transitions/transition_three.html"
        })
        .state('transitions.transition_four', {
            url: "/transition_four",
            templateUrl: "views/transitions/transition_four.html"
        })
        .state('transitions.transition_five', {
            url: "/transition_five",
            templateUrl: "views/transitions/transition_five.html"
        })

        // Charts
        .state('charts', {
            abstract: true,
            url: "/charts",
            templateUrl: "views/common/content.html",
            data: {
                pageTitle: 'Charts'
            }
        })
        .state('charts.flot', {
            url: "/flot",
            templateUrl: "views/charts/flot.html",
            data: {
                pageTitle: 'Flot chart',
                pageDesc: 'Flot is a pure JavaScript plotting library for jQuery, with a focus on simple usage, attractive looks and interactive features.'
            }
        })
        .state('charts.chartjs', {
            url: "/chartjs",
            templateUrl: "views/charts/chartjs.html",
            data: {
                pageTitle: 'ChartJS',
                pageDesc: 'Simple HTML5 Charts using the canvas element'
            }
        })
        .state('charts.inline', {
            url: "/inline",
            templateUrl: "views/charts/inline.html",
            data: {
                pageTitle: 'Inline charts',
                pageDesc: 'Small inline charts directly in the browser using data supplied in the controller.'
            }
        })

        .state('charts.chartist', {
            url: "/chartist",
            templateUrl: "views/charts/chartist.html",
            data: {
                pageTitle: 'Chartist',
                pageDesc: 'Chartist.js is a simple responsive charting library built with SVG.'
            }
        })
        .state('charts.c3Charts', {
            url: "/c3Charts",
            templateUrl: "views/charts/c3Charts.html",
            data: {
                pageTitle: 'C3 Charts',
                pageDesc: 'D3-based reusable chart library'
            }
        })

        // Common views
        .state('common', {
            abstract: true,
            url: "/common",
            templateUrl: "views/common/content_empty.html",
            data: {
                pageTitle: 'Common'
            }
        })
        .state('common.login', {
            url: "/login",
            templateUrl: "views/common_app/login.html",
            data: {
                pageTitle: 'Login page',
                specialClass: 'blank'
            }
        })
        .state('common.register', {
            url: "/register",
            templateUrl: "views/common_app/register.html",
            data: {
                pageTitle: 'Register page',
                specialClass: 'blank'
            }
        })
        .state('common.error_one', {
            url: "/error_one",
            templateUrl: "views/common_app/error_one.html",
            data: {
                pageTitle: 'Error 404',
                specialClass: 'blank'
            }
        })
        .state('common.error_two', {
            url: "/error_two",
            templateUrl: "views/common_app/error_two.html",
            data: {
                pageTitle: 'Error 505',
                specialClass: 'blank'
            }
        })
        .state('common.lock', {
            url: "/lock",
            templateUrl: "views/common_app/lock.html",
            data: {
                pageTitle: 'Lock page',
                specialClass: 'blank'
            }
        })
        .state('common.password_recovery', {
            url: "/password_recovery",
            templateUrl: "views/common_app/password_recovery.html",
            data: {
                pageTitle: 'Password recovery',
                specialClass: 'blank'
            }
        })
        // Tables views
        .state('tables', {
            abstract: true,
            url: "/tables",
            templateUrl: "views/common/content.html",
            data: {
                pageTitle: 'Tables'
            }
        })
        .state('tables.tables_design', {
            url: "/tables_design",
            templateUrl: "views/tables/tables_design.html",
            data: {
                pageTitle: 'Tables design',
                pageDesc: 'Examples of various designs of tables.'
            }
        })
        .state('tables.ng_grid', {
            url: "/ng_grid",
            templateUrl: "views/tables/ng_grid.html",
            data: {
                pageTitle: 'ngGgrid',
                pageDesc: 'Examples of various designs of tables.'
            }
        })
        .state('tables.datatables', {
            url: "/datatables",
            templateUrl: "views/tables/datatables.html",
            data: {
                pageTitle: 'DataTables',
                pageDesc: 'Advanced interaction controls to any HTML table'
            }
        })
        .state('tables.footable', {
            url: "/footable",
            templateUrl: "views/tables/footable.html",
            data: {
                pageTitle: 'FooTable',
                pageDesc: 'Advanced interaction controls to any HTML table'
            }
        })

        // Forms views
        .state('forms', {
            abstract: true,
            url: "/forms",
            templateUrl: "views/common/content_small.html",
            data: {
                pageTitle: 'Forms'
            }
        })
        .state('forms.forms_elements', {
            url: "/forms_elements",
            templateUrl: "views/forms/forms_elements.html",
            data: {
                pageTitle: 'Forms elements',
                pageDesc: 'Examples of various form controls.'
            }
        })
        .state('forms.forms_extended', {
            url: "/forms_extended",
            templateUrl: "views/forms/forms_extended.html",
            data: {
                pageTitle: 'Forms extended',
                pageDesc: 'Examples of various extended form controls.'
            }
        })
        .state('forms.text_editor', {
            url: "/text_editor",
            templateUrl: "views/forms/text_editor.html",
            data: {
                pageTitle: 'Text editor',
                pageDesc: 'Examples of text editor.'
            }
        })
        .state('forms.wizard', {
            url: "/wizard",
            templateUrl: "views/forms/wizard.html",
            data: {
                pageTitle: 'Wizard',
                pageDesc: 'Build a form with wizard functionality.'
            }
        })

        .state('forms.validation', {
            url: "/validation",
            templateUrl: "views/forms/validation.html",
            data: {
                pageTitle: 'Validation',
                pageDesc: 'Build a form with validation functionality.'
            }
        })

        // Grid system
        .state('grid_system', {
            url: "/grid_system",
            templateUrl: "views/grid_system.html",
            data: {
                pageTitle: 'Grid system'
            }
        })
}

angular
    .module('homer')
    .config(configState)
    .run(function($rootScope, $state, editableOptions) {
        $rootScope.$state = $state;
        editableOptions.theme = 'bs3';
    });