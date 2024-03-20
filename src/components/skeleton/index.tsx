import './index.scss';

interface SkeletonProps {
    rows: number;
    heigth?: number;
    width?: number;
}
export const Skeleton: React.FC<SkeletonProps> = ({ rows, heigth,width }) => {
    const rowsArray = Array(rows).fill(heigth);
    return (
        <div
            className="skeleton"
            style={width ? { width: `${width}px`} : {}}
        >
            {rowsArray.map((height, index) => (
                <div
                    className="skeleton__block"
                    style={{ height: height }}
                    key={index}
                ></div>
            ))}
        </div>
    );
};
