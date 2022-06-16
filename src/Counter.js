import { useState } from "react";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';

// TASK-4   --Counter

export function Counter() {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  return (
    <div className='counter'>
       <IconButton onClick={() => setLike(like + 1)}>
        <Badge badgeContent={like} color="primary" >
          <ThumbUpIcon color="palette.warning.light" />
        </Badge>
       </IconButton>
      <IconButton onClick={() => setDislike(dislike + 1)}>
        <Badge badgeContent={dislike} color="error">
          <ThumbDownIcon color="palette.warning.light" />
        </Badge>
      </IconButton>
    </div>
  );
}
