const convertOnlyMinute = (time) => {
  const [hour, minute] = time.split(":").map(Number);
  return hour * 60 + minute;
};

const convertMinuteToHour = (time) => {
  const hour = Math.floor(time / 60);
  const minute = time % 60;
  return `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
};

function solution(video_len, pos, op_start, op_end, commands) {
  const videoLength = convertOnlyMinute(video_len);
  const posTime = convertOnlyMinute(pos);
  const op_startTime = convertOnlyMinute(op_start);
  const op_endTime = convertOnlyMinute(op_end);
  
  let currentTime = posTime;

  const applyOpZoneRule = () => {
    if (currentTime >= op_startTime && currentTime <= op_endTime) {
      currentTime = op_endTime;
    }
  };

  const handlePrev = () => {
    applyOpZoneRule();
    currentTime = Math.max(0, currentTime - 10);
    applyOpZoneRule();
  };

  const handleNext = () => {
    applyOpZoneRule();
    currentTime = Math.min(videoLength, currentTime + 10);
    applyOpZoneRule();
  };

  commands.forEach(command => {
    if (command === 'next') handleNext();
    else if (command === 'prev') handlePrev();
  });

  return convertMinuteToHour(currentTime);
}
