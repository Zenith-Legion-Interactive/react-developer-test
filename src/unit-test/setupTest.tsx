// setupTests.ts
import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import store from '../common/utils/redux/store';

// Wrap the render function to include the Redux Provider
const customRender = (ui: React.ReactElement, options?: any) => render(<Provider store={store}>{ui}</Provider>, options);

// Export the custom render function
// eslint-disable-next-line react-refresh/only-export-components
export * from '@testing-library/react';
export { customRender as render };
