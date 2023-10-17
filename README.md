eko-oaas-package TypeScript NPM Package

Description:

Welcome to eko-oaas-package TypeScript NPM package! This package provides onboarding as a service which includes several steps like:

1. Location Capturing
2. Pan verification
3. Aadhar verification
4. Pan - Aadhar matching
5. Business details
6. Video KYC
7. Onboarding status

It is written in TypeScript, which allows you to take advantage of static typing and provides a great development experience.

Installation:

To install this package, you can use npm.

Run the following command:

npm i 'eko-oaas-package'

After installing the package, you can import and use it in your TypeScript project. Here's an example of how to use it:

import { OnBoradingVist, SelectionScreen } from "eko-oaas-package";

<!-- And just use component.  -->

<OnBoradingVist
	defaultStep={}	
	isBranding={false}
	userData={userData}
	handleSubmit={handleStepDataSubmit}
	stepResponse={lastStepResponse}
	selectedMerchantType={selectedRole}
	shopTypes={shopTypesData}
	stateTypes={stateTypesData}
	stepsData={stepperData}
	handleStepCallBack={handleStepCallBack}
/>

<SelectionScreen
   stepData={selectionStepData}
   handleSubmit={}
/>

Folder Structure:

    ┣src
    ┃ ┣ assets
    ┃ ┃ ┣ Styles
    ┃ ┃ ┣ icons
    ┃ ┃ ┃ ┣ alert.png
    ┃ ┃ ┃ ┣ alert.svg
    ┃ ┃ ┃ ┣ camera.svg
    ┃ ┃ ┃ ┣ completemark.svg
    ┃ ┃ ┃ ┣ cross.svg
    ┃ ┃ ┃ ┣ downarrowfilled.svg
    ┃ ┃ ┃ ┣ filledcamera.svg
    ┃ ┃ ┃ ┣ imageicon.svg
    ┃ ┃ ┃ ┣ logo.png
    ┃ ┃ ┃ ┣ nextarrow.svg
    ┃ ┃ ┃ ┣ previousarrow.svg
    ┃ ┃ ┃ ┣ retry.png
    ┃ ┃ ┃ ┣ selfie.png
    ┃ ┃ ┃ ┣ thumb.svg
    ┃ ┃ ┃ ┣ thumpdown.svg
    ┃ ┃ ┃ ┣ tickmark.svg
    ┃ ┃ ┃ ┣ user_distributor.png
    ┃ ┃ ┃ ┣ user_enterprise.png
    ┃ ┃ ┃ ┣ user_merchant.png
    ┃ ┃ ┃ ┗ welcomeIcon.png
    ┃ ┃ ┣ CloseIcon.tsx
    ┃ ┃ ┗ DropdownIcon.tsx
    ┃ ┣ components
    ┃ ┃ ┣ Common
    ┃ ┃ ┃ ┣ Camera
    ┃ ┃ ┃ ┃ ┣ Camera.tsx
    ┃ ┃ ┃ ┃ ┣ Frontcam.tsx
    ┃ ┃ ┃ ┃ ┣ cameraConfig.ts
    ┃ ┃ ┃ ┃ ┗ index.ts
    ┃ ┃ ┃ ┣ Header
    ┃ ┃ ┃ ┃ ┣ Header.tsx
    ┃ ┃ ┃ ┃ ┣ Headermobile.tsx
    ┃ ┃ ┃ ┃ ┗ index.ts
    ┃ ┃ ┃ ┣ Sidebar
    ┃ ┃ ┃ ┃ ┣ Sidebar.css
    ┃ ┃ ┃ ┃ ┣ Sidebar.tsx
    ┃ ┃ ┃ ┃ ┗ index.ts
    ┃ ┃ ┃ ┣ Alert.tsx
    ┃ ┃ ┃ ┣ Backcam.tsx
    ┃ ┃ ┃ ┣ Browse.tsx
    ┃ ┃ ┃ ┣ ButtonGlobal.tsx
    ┃ ┃ ┃ ┣ Fetching.tsx
    ┃ ┃ ┃ ┣ InputGlobal.tsx
    ┃ ┃ ┃ ┣ Labelglobal.tsx
    ┃ ┃ ┃ ┣ Modal.tsx
    ┃ ┃ ┃ ┗ Uploadfile.tsx
    ┃ ┃ ┣ CustomHooks
    ┃ ┃ ┃ ┗ UseGeoLocation.tsx
    ┃ ┃ ┣ OnboardingWidget
    ┃ ┃ ┃ ┣ OnboardingWidget.tsx
    ┃ ┃ ┃ ┗ index.ts
    ┃ ┃ ┗ Steps
    ┃ ┃ ┃ ┣ AadharSteps
    ┃ ┃ ┃ ┃ ┣ AadharConsent.tsx
    ┃ ┃ ┃ ┃ ┣ AadharNumberOtpVerify.tsx
    ┃ ┃ ┃ ┃ ┣ AdharVerifiction.tsx
    ┃ ┃ ┃ ┃ ┣ ConfirmAadharNumber.tsx
    ┃ ┃ ┃ ┃ ┗ index.ts
    ┃ ┃ ┃ ┣ ActivationPlan
    ┃ ┃ ┃ ┃ ┣ ActivationPlan.tsx
    ┃ ┃ ┃ ┃ ┗ index.ts
    ┃ ┃ ┃ ┣ Agreement
    ┃ ┃ ┃ ┃ ┣ SignAgreement.tsx
    ┃ ┃ ┃ ┃ ┗ index.ts
    ┃ ┃ ┃ ┣ Business
    ┃ ┃ ┃ ┃ ┣ Business.tsx
    ┃ ┃ ┃ ┃ ┣ BusinessMerchant.tsx
    ┃ ┃ ┃ ┃ ┗ index.ts
    ┃ ┃ ┃ ┣ KYC
    ┃ ┃ ┃ ┃ ┣ VideoKYC.tsx
    ┃ ┃ ┃ ┃ ┗ index.ts
    ┃ ┃ ┃ ┣ Location
    ┃ ┃ ┃ ┃ ┣ LoctionCapture.tsx
    ┃ ┃ ┃ ┃ ┗ index.ts
    ┃ ┃ ┃ ┣ OnBoardingStatus
    ┃ ┃ ┃ ┃ ┣ OnboardingStatus.tsx
    ┃ ┃ ┃ ┃ ┗ index.ts
    ┃ ┃ ┃ ┣ OnBoradingWrapper
    ┃ ┃ ┃ ┃ ┣ OnBoradingWrapper.tsx
    ┃ ┃ ┃ ┃ ┗ index.ts
    ┃ ┃ ┃ ┣ PIN
    ┃ ┃ ┃ ┃ ┣ SecretPin.tsx
    ┃ ┃ ┃ ┃ ┗ index.ts
    ┃ ┃ ┃ ┣ PanSteps
    ┃ ┃ ┃ ┃ ┣ PanAdharMatch.tsx
    ┃ ┃ ┃ ┃ ┣ PanVerification.tsx
    ┃ ┃ ┃ ┃ ┗ index.ts
    ┃ ┃ ┃ ┣ SelectionScreen
    ┃ ┃ ┃ ┃ ┣ SelectionScreen.tsx
    ┃ ┃ ┃ ┃ ┗ index.ts
    ┃ ┃ ┃ ┣ SupersetComponent
    ┃ ┃ ┃ ┃ ┣ SupersetComponent.tsx
    ┃ ┃ ┃ ┃ ┗ index.ts
    ┃ ┃ ┃ ┣ Welcome
    ┃ ┃ ┃ ┃ ┣ Welcome.tsx
    ┃ ┃ ┃ ┃ ┗ index.ts
    ┃ ┃ ┃ ┗ index.ts
    ┃ ┣ scripts
    ┃ ┃ ┗ leegalityv5.min.js
    ┃ ┣ store
    ┃ ┃ ┗ zustand.tsx
    ┃ ┣ stories
    ┃ ┃ ┣ Asdhar.stories.tsx
    ┃ ┃ ┗ HomePage.stories.tsx
    ┃ ┣ types
    ┃ ┃ ┗ index.d.ts
    ┃ ┣ utils
    ┃ ┃ ┣ data
    ┃ ┃ ┃ ┗ stepsData.ts
    ┃ ┃ ┣ globalInterfaces
    ┃ ┃ ┃ ┗ stepsInterface.ts
    ┃ ┃ ┗ defaultTheme.ts
    ┃ ┣ index.css
    ┃ ┗ index.ts.babelrc
    ┃ .env
    ┃ .gitignore
    ┃ .npmrc
    ┃ .prettierrrc
    ┃ api.js
    ┃ package-lock.json
    ┃ package.json
    ┃ postcss.config.js
    ┃ README.md
    ┃ rollup.config.js
    ┃ tailwind.config.js
    ┃ tsconfig.json
    ┗.babelrc

Why Tailwind CSS?

Tailwind CSS is a highly popular utility-first CSS framework that offers numerous benefits, which influenced our decision to include it in our npm package.

Rapid Prototyping:

Tailwind CSS enables developers to rapidly prototype and iterate on designs by providing an extensive set of utility classes. These classes can be easily combined to create complex layouts and styling
without the need for writing custom CSS.

Consistent Design System:

Tailwind CSS promotes a consistent design system by enforcing a strict utility class-based approach. This ensures that styling remains consistent throughout the application, regardless of the
developer working on it.

Modularity and Customization:

Tailwind CSS is highly modular and customizable. Developers can easily configure and extend the framework to suit their specific project requirements. This flexibility allows for creating unique and
tailored user interfaces.

Performance Optimization:

Tailwind CSS is designed to generate minimal, optimized CSS. By utilizing only the necessary utility classes, the resulting CSS file is significantly smaller compared to traditional frameworks. This
optimization leads to faster load times and improved performance.

Community and Ecosystem:

Tailwind CSS has a vibrant and active community that contributes to its growth. It has an extensive ecosystem of plugins, themes, and extensions that further enhance its functionality. This ecosystem
ensures ongoing support and a wide range of resources available to developers.

Developer Productivity:

Tailwind CSS eliminates the need for writing repetitive CSS code. The utility classes provided by Tailwind CSS reduce the time spent on styling and allow developers to focus more on building
functionality and features.

By including Tailwind CSS in our npm package, we aim to provide developers with a powerful and efficient toolset that enhances their productivity, fosters consistent design systems, and allows for
rapid development and customization.

tailwind.config.js

The tailwind.config.js file contains the custom configuration for your Tailwind CSS framework. Let's go through the features specified in this configuration:

1. Content Configuration The content property defines the files to be scanned by PurgeCSS, which removes unused CSS. In this configuration, the content property includes TypeScript and TypeScript
   React files (_.ts, _.tsx) located in the src/ directory, components/ directory, and stories/ directory.

2. Theme Customization The theme property allows you to customize various aspects of the Tailwind CSS framework. In this configuration, the extend property is used to add or override color
   definitions. Several custom colors such as white, black, lightdefault, default, darkdefault, success, warning, darkdanger, danger, lightdanger, and primary are defined.

3. Box Shadows The boxShadow property allows you to define custom box shadow utilities. In this configuration, box shadow utilities with the names xl, 3xl, and 2xl are defined with specific shadow
   values.

4. Container Configuration The container property allows you to configure the behavior of the container utility class. In this configuration, the container is set to be centered (center: true) and
   padding values are defined for different screen sizes (sm, lg, xl, 2xl). The default padding is set to 1rem.

5. Variants Configuration The variants property lets you enable or disable variants for utilities. In this configuration, the container variant is set to an empty array, meaning no additional variants
   are added specifically for the container utility.

6. Core Plugins Configuration The corePlugins property allows you to control which core plugins are enabled or disabled. In this configuration, the container plugin is disabled.

7. Responsive Breakpoints The screens property defines the breakpoints for responsive design. It sets the screen sizes for different breakpoints such as sm, md, lg, xl, and 2xl. These breakpoints can
   be used to create responsive utility classes.

8. Plugins The plugins property is an array where you can include any Tailwind CSS plugins you want to use in your project. Currently, no plugins are included in this configuration.

tsconfig.json File

The tsconfig.json file is a configuration file used in TypeScript projects to specify compiler options and settings. It is located in the root directory of your project and helps define how TypeScript
should compile your code.

Compiler Options

The compilerOptions section in your tsconfig.json file contains various options that control the behavior of the TypeScript compiler. Let's go through each option:

target:

Specifies the ECMAScript target version for the compiled JavaScript code. In this case, the target is set to "ES6".

lib:

Defines the libraries to include automatically in the compilation. Here, the "ES2018" and "DOM" libraries are included.

jsx:

Specifies the JSX factory function to use for React. It is set to "react".

allowJs:

Allows JavaScript files to be included in the TypeScript compilation. It is set to true.

module:

Determines the module code generation for the compiled JavaScript. Here, the module is set to "ESNext".

declarationDir:

Specifies the output directory for generated declaration files (.d.ts). In this case, the declarations will be placed in the "types" directory.

moduleResolution:

Defines the strategy TypeScript uses to resolve module dependencies. It is set to "node".

strict:

Enables strict type-checking and additional TypeScript features to enforce stricter code quality. It is set to true.

forceConsistentCasingInFileNames:

Ensures consistent casing of file names. It is set to true.

noFallthroughCasesInSwitch:

Checks for missing break statements in switch cases. It is set to true. resolveJsonModule: Enables importing JSON files as modules. It is set to true.

isolatedModules:

Treats each file as a separate module, which allows faster incremental builds. It is set to true.

plugins:

Specifies a TypeScript plugin to be used. Here, the "typescript-plugin-css-modules" plugin is added.

types:

Specifies the type declaration files to be included. Here, the "node" type is included.

declaration:

Enables the generation of declaration files (.d.ts) alongside the compiled JavaScript for type-checking in other projects. It is set to true.

sourceMap:

Generates source map files that link the compiled JavaScript to the original TypeScript code for debugging purposes. It is set to true.

outDir:

Defines the output directory for compiled JavaScript files. In this case, the output will be placed in the "dist/esm" directory.

allowSyntheticDefaultImports:

Allows importing modules with a default export from modules that have no default export. It is set to true.

esModuleInterop:

Enables compatibility with CommonJS modules using default exports. It is set to true. noImplicitAny: Raises an error on expressions and declarations with an implied any type. It is set to true.

skipLibCheck:

Skips type-checking of all the type declaration files from the TypeScript standard library. It is set to true.

File Inclusion and Exclusion

The include and exclude options determine which files are included or excluded during the compilation process.

include:

Specifies the files and/or directories to include in the compilation. Here, the "src" directory, including _.ts, _.tsx, and the "jest.config.ts" files, are included. exclude: Specifies the files
and/or directories to exclude from the compilation. Here, the "node_modules" and "dist" directories are excluded.

By configuring these options, you can control which files are processed by TypeScript during compilation.

{ "compilerOptions": {

    "target": "ES6",
    "lib": ["ES2018", "DOM"],
    "jsx": "react",
    "allowJs": true,
    "module": "ESNext",
    "declarationDir": "types",
    "moduleResolution": "node",
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noFallthroughCasesInSwitch": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "plugins": [{ "name": "typescript-plugin-css-modules" }],
    "types": ["node"],
    "declaration": true,
    "sourceMap": true,
    "outDir": "dist/esm",
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "noImplicitAny": true,
    "skipLibCheck": true

}, "include": ["src/**/*.ts", "src/**/*.tsx", "jest.config.ts"], "exclude": ["node_modules", "dist"] }

Rollup Feature:

The Rollup feature is a powerful tool that allows you to consolidate and bundle your JavaScript code into a single file for deployment. It simplifies the process of managing dependencies, optimizing
code size, and improving performance. This README file provides an overview of the Rollup feature and instructions on how to use it effectively.

Why Use Rollup?

Rollup offers several advantages over traditional bundlers like Webpack or Browserify. It focuses on creating smaller, optimized bundles by following an ES module-centric approach. Here are some key
benefits of using Rollup:

Efficient Bundle Size:

Rollup analyzes your code and tree-shakes unused modules, resulting in smaller bundle sizes compared to other bundlers. This can lead to faster load times and improved performance for your
applications.

ES Module Support:

Rollup natively supports ES modules, allowing you to take full advantage of the module syntax and features. It can handle both ES modules and CommonJS modules, making it suitable for a wide range of
projects.

Code Splitting and Dynamic Imports:

Rollup supports code splitting and dynamic imports, enabling you to load specific modules only when needed. This feature can significantly reduce the initial load time of your application.

Plugins and Customization:

Rollup has a rich ecosystem of plugins that extend its functionality. You can use plugins to optimize your code, transform assets, integrate with other tools, and more. Additionally, Rollup's
configuration is highly customizable, giving you fine-grained control over the bundling process.

Getting Started

To use the Rollup feature in your project, follow these steps:

Installation:

Install Rollup globally or as a development dependency using npm or yarn.

bash Copy code npm install --global rollup

import { terser } from 'rollup-plugin-terser';

export default {  
 input: 'src/index.js',

output: { file: 'dist/bundle.js', format: 'umd', }, plugins: [terser()],

};

In this example, we specify an input file (src/index.js), an output file (dist/bundle.js), and use the umd format for compatibility with different environments. We also include the terser plugin for
code minification.

Run Rollup:

Use the Rollup command-line interface (CLI) or integrate it into your build process. By default, Rollup will look for the rollup.config.js file and bundle your code accordingly.

rollup -c

Storybook Feature:

The Storybook feature is an exciting addition to your project that allows you to create and showcase interactive UI components in a visually appealing and organized manner. This README file provides a
comprehensive overview of the Storybook feature, guiding you through its installation, usage, and customization options.

Table of Contents:

Installation

Getting Started

Creating Stories

Customizing Stories

Add-Ons and Plugins

Deploying Storybook

Troubleshooting

Contributing

License

Installation:

Start by installing the Storybook package using your preferred package manager. Typically, this involves running a command such as npm install --global @storybook/cli or yarn add @storybook/react.
Refer to the official documentation for detailed installation instructions tailored to your project's specific requirements.

Getting Started:

Once the installation is complete, initialize Storybook in your project directory using the appropriate command, such as npx sb init or yarn run sb init. This will set up the necessary configuration
files and folders for your Storybook.

Creating Stories:

Stories are individual components or UI elements that you want to showcase in Storybook. You can create stories by creating files ending with .stories.js or using the new "CSF" (Component Story
Format) syntax. In these files, you define various states and variations of your component, allowing you to present them in an interactive and isolated manner.

Customizing Stories:

Storybook provides a range of customization options to enhance the appearance and functionality of your stories. You can configure the layout, add global decorators to wrap your components, define
parameters to control the story behavior, and specify controls for interactive props. Additionally, you can use addons and plugins to extend Storybook's capabilities.

Add-Ons and Plugins:

Storybook supports a vast ecosystem of add-ons and plugins that extend its functionality. These additional tools allow you to integrate design systems, showcase documentation, test component behavior,
and more. You can browse the official Storybook Addons website or consult the Storybook documentation to explore the available options and learn how to incorporate them into your project.

Deploying Storybook:

Once you have created and customized your stories, you can deploy your Storybook for easy sharing and collaboration with others. Storybook provides various deployment options, including static site
generators, hosting platforms, and cloud services. Refer to the documentation for step-by-step instructions on deploying Storybook to your preferred hosting environment.

Troubleshooting:

Encountering issues while using Storybook? The Troubleshooting section of this README provides guidance on common problems and their solutions. It covers topics such as configuration errors,
incompatible dependencies, and debugging techniques.

Contributing:

Contributions to Storybook are always welcome! If you find a bug, have an idea for a new feature, or want to improve the documentation, follow the guidelines outlined in the Contributing section. It
provides instructions for submitting bug reports, feature requests, and pull requests.

License:

Storybook is typically released under an open-source license, such as the MIT License. Make sure to review the license file included in the Storybook package to understand your rights and obligations
when using Storybook in your project.

Chromatic:

The chromatic feature in this project refers to a unique and visually striking characteristic that adds color diversity and vibrancy to the user interface. This feature enhances the overall aesthetics
of the project, providing an engaging and captivating visual experience for users.

Color Palette:

A carefully curated color palette has been selected to ensure harmonious and visually appealing combinations. The palette includes a diverse range of colors that complement each other and create a
balanced visual composition.

Dynamic Color Rendering:

The chromatic feature dynamically renders colors based on specific conditions or user interactions. This dynamic behavior adds an element of interactivity and responsiveness to the user interface.

Gradient Effects:

Gradients are utilized to create smooth color transitions and depth. By blending multiple colors seamlessly, gradients enhance the visual richness of the project and contribute to a captivating
experience.

Color Customization:

Users have the ability to customize colors within the application. This customization feature empowers users to personalize their experience according to their preferences and create a unique visual
environment.

Benefits The chromatic feature offers several benefits to the project, including:

Visual Appeal:

The vibrant and diverse color palette creates an engaging visual experience, capturing users' attention and making the project aesthetically pleasing.

User Engagement:

The dynamic color rendering and interactive elements foster user engagement and provide a sense of interactivity, increasing user satisfaction and enjoyment.

Branding and Identity:

The chromatic feature can be used to reinforce a project's brand identity by incorporating brand colors or aligning with the project's overall visual identity.

Accessibility:

The use of a carefully designed color palette ensures that the project remains accessible to users with different color vision abilities, considering factors such as contrast and readability.

Usage To incorporate the chromatic feature into your project, follow these steps:

Install the necessary dependencies and frameworks specified in the project documentation.

Import the color palette or define custom colors according to the project's requirements.

Implement the dynamic color rendering logic based on your project's specifications.

Integrate the chromatic feature within the user interface components where appropriate.

Please refer to the project documentation for detailed instructions and code examples related to the chromatic feature implementation.

License [MIT]

Git Address: https://github.com/ekoindia/oaas_eko_package

NPM Link: https://www.npmjs.com/package/eko-oaas-package

Thank you for using eko-oaas-package TypeScript NPM package!
