import React from "react";
import {Bone, Skeleton} from "react-loading-skeleton-placeholders";

export const buildHomeProductsListSkeleton = (count) => {
    let skeleton = [];
    for (let i = 0; i < count; i++) {
        skeleton = [...skeleton, <div className="row" key={i}>
            <div className="col-md-3 no-padding" style={{borderRadius: "15px"}}>
                <div className="full-width full-height">
                    <Bone height={209}/>
                </div>
            </div>
            <div className="col-md-9 ">
                <div className="pr-info">
                    <Skeleton amount={7}/>
                </div>
            </div>
        </div>];
    }

    return skeleton;
};