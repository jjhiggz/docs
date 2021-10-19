/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

const downloadedChangelog = require('./ditto-changelog.json')

module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    { 
      type: "autogenerated", 
      dirName: "." 
    },
    {
      type: "category",
      label: "API Reference",
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "link",
          label: "JavaScript", // The link label
          href: downloadedChangelog.js.Ditto.latest.api_reference_docs_url, // The external URL
        },
        {
          type: "link",
          label: "React", // The link label
          href: "https://getditto.github.io/react-ditto/", // The external URL
        },
        {
          type: "link",
          label: "Swift", // The link label
          href: downloadedChangelog.cocoa.DittoSwift.latest.api_reference_docs_url, // The external URL
        },
        {
          type: "link",
          label: "Kotlin", // The link label
          href: downloadedChangelog.android.Ditto.latest.api_reference_docs_url, // The external URL
        },
        {
          type: "link",
          label: ".NET", // The link label
          href: downloadedChangelog.dotnet.Ditto.latest.api_reference_docs_url, // The external URL
        },
        {
          type: "link",
          label: "Java", // The link label
          href: downloadedChangelog.android.Ditto.latest.api_reference_docs_url, // The external URL
        },
        {
          type: "link",
          label: "Objective-C", // The link label
          href: downloadedChangelog.cocoa.DittoObjC.latest.api_reference_docs_url, // The external URL
        },
        {
          type: "link",
          label: "C++", // The link label
          href: downloadedChangelog.cpp.Ditto.latest.api_reference_docs_url, // The external URL
        },
      ],
    },
    {
      type: "link",
      label: "Changelog", // The link label
      href: "/changelog", // The external URL
    },
    {
      type: "link",
      label: "GitHub Issues", // The link label
      href: "https://github.com/getditto/docs/issues", // The external URL
    },
    {
      type: "link",
      label: "Roadmap", // The link label
      href: "https://github.com/getditto/docs/discussions/categories/roadmap-and-ideas", // The external URL
    },
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
};
