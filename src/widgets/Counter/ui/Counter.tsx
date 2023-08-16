import { useAppSelector } from "app/providers/StoreProvider/lib/hooks/useAppSelector";
import { counterActions, getCounter } from "entity/slices/counter";
import type { FC } from "react";
import { useDispatch } from "react-redux";
import { Button } from "shared/ui/Button";
import { Typography } from "shared/ui/Typography";

export const Counter: FC = () => {
    const { value } = useAppSelector(getCounter);
    const dispatch = useDispatch();

    return (
        <div>
            <Typography role="h4">{value}</Typography>
            <Button onClick={() => dispatch(counterActions.increment())}>
                +
            </Button>
            <Button onClick={() => dispatch(counterActions.decrement())}>
                -
            </Button>
        </div>
    );
};
