import cn from "classnames";
import styles from './Badge.module.scss';
import { ComponentType, SVGProps } from "react";
import xmark from '@/shared/assets/xmark.svg'

type BadgeProps = {
  className?: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  children: string;
  active: boolean;
}

const Badge = ({ icon, children, active, className }: BadgeProps) => {
  const Icon = active ? xmark : icon;
  return (
    <div className={cn(styles.badge, styles[active.toString()], className)}>
      <Icon width="1em" height="1em" className={styles.icon}/>
      {children}
    </div>
  );
};

export default Badge;