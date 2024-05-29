import AspectRatio, {calculateAspectRatio} from './AspectRatio';
import "./AspectRatioSelector.css";

const Button = ({ selected, aspectRatio, onClick, colour = 'black' }: {selected:boolean, aspectRatio:AspectRatio, onClick: (ratio:AspectRatio) => void, colour:string}) => {
    return (
        <div
            className={`button`}
            onClick={() => onClick(aspectRatio)}
        >
            <svg width="70px" height="45px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#000000" className="bi bi-aspect-ratio">
                <path
                    d="M0 3.5A1.5 1.5 0 0 1 1.5 2h13A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5v-9zM1.5 3a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z"
                    stroke={colour}
                    fillRule="nonzero"
                />
                <defs>
                    <filter id="invert-alpha">
                        <feColorMatrix type="matrix" values="1 0 0 0 0 
                                       0 1 0 0 0 
                                       0 0 1 0 0
                                       0 0 0 -1 1"/>
                    </filter>
                </defs>
                <g
                    filter={ selected ? 'url(#invert-alpha)' : '' }
                >
                    <path
                        d="M2 4.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H3v2.5a.5.5 0 0 1-1 0v-3zm12 7a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1H13V8.5a.5.5 0 0 1 1 0v3z"
                        fill={colour}
                    />
                    <text
                        x="50%"
                        y="52%"
                        dominantBaseline="middle"
                        textAnchor="middle"
                        fill={colour}
                        fontSize="4pt"
                    >
                        {aspectRatio.toString()}
                    </text>
                </g>
            </svg>      
        </div>
    );
};

const AspectRatioSelector = ({actualRatio, selectedRatio, onSelectRatio}: { actualRatio:AspectRatio, selectedRatio:AspectRatio, onSelectRatio:(aspectRatio:AspectRatio) => void}) => {
    var ratios:AspectRatio[] = AspectRatio.CommonAspectRatios;

    if (!actualRatio.isCommonAspectRatio()) {
        ratios.unshift(actualRatio);
    }
//    if (!ratios.includes(actualRatio))
//        ratios.push(actualRatio);

//    const actualRatio = ratios.filter((ratio) => ratio.isEqual(calculateAspectRatio(actualRatio)));

    return (
        <div className="aspect-ratio-selector">
        {ratios.map((ratio, index) => (
            <Button
                key={index}
                selected={ratio.isEqual(calculateAspectRatio(selectedRatio))}
                aspectRatio={ratio}
                onClick={onSelectRatio}
            />
        ))}
        </div>
    );
};

export default AspectRatioSelector;
