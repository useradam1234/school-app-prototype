
import { useCountAnimation } from "@/hooks/useCountAnimation";

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

const AnimatedCounter = ({ end, suffix = "", duration = 2000 }: AnimatedCounterProps) => {
  const count = useCountAnimation(end, duration);
  
  return (
    <span>
      {count}{suffix}
    </span>
  );
};

export default AnimatedCounter;
