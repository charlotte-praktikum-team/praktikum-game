import { Component } from 'react';
import { Heading } from '../heading/heading';
import { P } from '../p/p';
import { ErrorBoundaryProps, ErrorBoundaryState } from './types';

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);

    this.state = {
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  render() {
    const { error } = this.state;
    const { children } = this.props;

    if (error) {
      return (
        <main className='content content_centered'>
          <Heading type='h1' size='xl'>
            Seems like an error occurred!
          </Heading>

          <P>{error.message}</P>
        </main>
      );
    }

    return children;
  }
}
