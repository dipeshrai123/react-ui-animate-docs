import React from 'react';
import Translate, {translate} from '@docusaurus/Translate';
import Link from '@docusaurus/Link';
import type {Props} from '@theme/DocPaginator';
import {FiArrowLeft, FiArrowRight} from 'react-icons/fi';

export default function DocPaginator({previous, next}: Props): JSX.Element {
  return (
    <nav
      className="doc-pager"
      aria-label={translate({
        id: 'theme.docs.paginator.navAriaLabel',
        message: 'Docs pages',
        description: 'The ARIA label for the docs pagination',
      })}>
      {previous ? (
        <Link
          className="doc-pager__link doc-pager__link--prev"
          to={previous.permalink}>
          <span className="doc-pager__meta">
            <FiArrowLeft aria-hidden />
            <Translate
              id="theme.docs.paginator.previous"
              description="The label used to navigate to the previous doc">
              Previous
            </Translate>
          </span>
          <span className="doc-pager__title">{previous.title}</span>
        </Link>
      ) : (
        <span className="doc-pager__spacer" aria-hidden />
      )}
      {next ? (
        <Link
          className="doc-pager__link doc-pager__link--next"
          to={next.permalink}>
          <span className="doc-pager__meta">
            <Translate
              id="theme.docs.paginator.next"
              description="The label used to navigate to the next doc">
              Next
            </Translate>
            <FiArrowRight aria-hidden />
          </span>
          <span className="doc-pager__title">{next.title}</span>
        </Link>
      ) : (
        <span className="doc-pager__spacer" aria-hidden />
      )}
    </nav>
  );
}
