import React from 'react';
import { Provider } from 'react-redux';
import { Container } from 'next/app';
import withRedux from 'next-redux-wrapper';
import { makeStore } from '../redux';

const MyApp = ({ Component, pageProps, store }) => {
    return (
        <Container>
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        </Container>
    );
};

MyApp.getInitialProps = async ({ Component, ctx }) => {
    // we can dispatch from here too
    ctx.store.dispatch({ type: 'FOO', payload: 'foo' });
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
    return { pageProps };
};

export default withRedux(makeStore)(MyApp);