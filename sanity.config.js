import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {
  dashboardTool,
  sanityTutorialsWidget,
  projectUsersWidget,
  projectInfoWidget,
} from "@sanity/dashboard";
import {netlifyWidget} from "sanity-plugin-dashboard-widget-netlify";
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Sanity Project',

  projectId: 'o9bzeud3',
  dataset: 'production',

  plugins: [deskTool(), visionTool(), dashboardTool({ 
    widgets: [    
      sanityTutorialsWidget(),
      projectInfoWidget(),
      projectUsersWidget(),
      netlifyWidget({
          title: 'My Netlify Deploys',
          sites: [
            {
              title: 'My Studio',
              apiId: 'bd3f84f8-29e1-4021-8da3-1bc92f47e9c9',
              buildHookId: '64f63d49f28bfb15c920c3df',
              name: 'forx-sanity-studio',
            }
          ]
      }),
    ]})],



  schema: {
    types: schemaTypes,
  },
})
