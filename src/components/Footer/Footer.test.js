import React from 'react';
import { render, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';
import IntlProvider from '../../i18n/DopplerIntlProvider.double-with-ids-as-values';

import Footer from './Footer';

describe('Footer component', () => {
  afterEach(cleanup);

  it('renders footer rights reserved message', () => {
    const { getByText } = render(
      <IntlProvider>
        <Footer />
      </IntlProvider>,
    );
    expect(getByText('common.copyright_MD')).toBeInTheDocument();
  });
});
