/* eslint-disable @typescript-eslint/indent */
import {
    Component,
    type PropsWithChildren,
    type ErrorInfo,
    type ReactNode,
} from "react";
import { PageError } from "widgets/PageError";

interface ErrorBoundaryProps extends PropsWithChildren {}
interface ErrorBoundaryState {
    hasError: boolean;
}

export class ErrorBoundary extends Component<
    ErrorBoundaryProps,
    ErrorBoundaryState
> {
    constructor(props: ErrorBoundaryProps) {
        super(props);

        this.state = { hasError: false };
    }

    static getDerivedStateFromError(): ErrorBoundaryState {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        console.error(error, errorInfo);
    }

    render(): ReactNode {
        const { hasError } = this.state;

        if (hasError) {
            return <PageError />;
        }

        return this.props.children;
    }
}
