## Main libraries

### [Recharts](https://recharts.org/en-US)
A composable charting library built on React components

### [Ant Design](https://ant.design/)
Ant Design is a React. js UI library that contains easy-to-use components that are useful for building interactive user interfaces. It is very easy to use as well as integrate. It is one of the smart options to design web applications using react. It provides us with high-quality components which can be used with ease.

The theme provided by our UI/UX designer is consistent with branding of Projuventute.
We customized Ant Design theme, with our custom theme.

```
<ConfigProvider
    theme={{
         token: {
             colorPrimary: '#fecc33',
         },
        components: {
            Button: {
                colorPrimary: '#fecc33',
                colorWhite: '#000000',
                algorithm: true,
                borderRadius: 0,
                fontWeight: 600
            },
        },
    }}
>
    <App/>
</ConfigProvider>
```


### [Styled components](https://styled-components.com/docs)
styled-components allows you to write actual CSS code to style your components. It also removes the mapping between components and styles – using components as a low-level styling construct could not be easier!