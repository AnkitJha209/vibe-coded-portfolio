import React from "react";

export default async function top() {
    return (
        <div className="text-sm whitespace-pre-wrap">
            {`PID    COMMAND              CPU%   MEM
1      backend-api          42.0   128MB
2      bullmq-worker        18.5    64MB
3      side-project-ideas   99.9   512MB
4      sleep                 0.0     0MB  [NOT RUNNING]
5      coffee-intake        78.2    --`}
        </div>
    );
}
