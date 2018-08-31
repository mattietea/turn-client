<!-- prettier-ignore-start -->
/ modules
    / auth
        - auth.container.js       = AppContainer    /auth
        / pages
            - signIn.appPage.js   = SignInAppPage   /auth/sign-in
            - signUp.appPage.js   = SignUpAppPage   /auth/sign-up
    / profile
        - profile.container.js
        / pages
            - view.profilePage.js  = ViewUserPage   /profile/:id
            - edit.profilePage.js  = EditUserPage   /profile/:id/edit

/ providers
    - apollo.provider.js           = ApolloProvider 

/ interface
    / config
        - theme.config.js          = themeConfig
    / components
        - global.component.js
        - button.component.js 

<!-- prettier-ignore-end -->
# turn-client
