import { activeAffiliateIcon, activeBillingIcon, activeConfigIcon, activeCustomerIcon, activeDashboardIcon, activeReleaseIcon, activeToolsIcon, affiliateIcon, billingIcon, configIcon, customerIcon, dashboardIcon, releaseIcon, toolsIcon } from "./images";

export const SIDEBAR = [
    {
        title: "Dashboard", path: `/dashboard`, active: false, sub: false, icon: dashboardIcon, activeIcon: activeDashboardIcon
    },
    {
        title: "Customer", path: `/customer`, sub: true, active: false, icon: customerIcon, activeIcon: activeCustomerIcon, children: [
            { title: "Company", path: "/customer/company" },
            { title: "Inquiry", path: "/customer/inquiry" },
            { title: "Employee", path: "/customer/employee" }
        ]
    },
    {
        title: "Billing", path: `/billing`, sub: true, active: false, icon: billingIcon, activeIcon: activeBillingIcon, children: [
            { title: "Plan", path: "/billing/plan" }
        ]
    },
    {
        title: "Affiliate", path: `/affiliate`, sub: true, active: false, icon: affiliateIcon, activeIcon: activeAffiliateIcon, children: [
            { title: "Affiliate User", path: "/affiliate/affiliate-user" },
            { title: "Affiliate Company", path: "/customer/affiliate-company" }
        ]
    },
    {
        title: "New Release", path: `/release`, sub: true, active: false, icon: releaseIcon, activeIcon: activeReleaseIcon, children: [
            { title: "HRMS", path: "/release/hrms" },
            { title: "PMS", path: "/release/pms" },
            { title: "Chat", path: "/release/chat" },
            { title: "Payroll", path: "/release/payroll" },
            { title: "Survey", path: "/release/survey" },
            { title: "Recruit", path: "/release/recruit" },
            { title: "Assets", path: "/release/assets" }
        ]
    },
    {
        title: "Tools", path: `/tools`, sub: true, active: false, icon: toolsIcon, activeIcon: activeToolsIcon, children: [
            { title: "App Link", path: "/tools/app-link" },
            { title: "Bank Format", path: "/tools/bank-format" },
            { title: "Bank List", path: "/tools/bank-list" },
            { title: "Video URL", path: "/tools/video-url" }
        ]
    },
    {
        title: "Config", path: `/config`, sub: true, active: false, icon: configIcon, activeIcon: activeConfigIcon, children: [
            { title: "Admin User", path: "/config/admin-user" },
            { title: "Access Level", path: "/config/access-level" },
            { title: "Suppression Bounce", path: "/config/suppression-bounce" },
            { title: "Stages", path: "/config/stages" }
        ]
    }
]