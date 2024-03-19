import './index.scss';

interface SkeletonProps {
    rows: number;
    heigth?: number;
}
export const Skeleton: React.FC<SkeletonProps> = ({ rows, heigth }) => {
    const rowsArray = Array(rows).fill(heigth);
    return (
        <div className="skeleton">
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
