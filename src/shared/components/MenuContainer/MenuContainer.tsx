import styles from './MenuContainer.module.scss';
import cn from 'classnames';

type DropdownMenuProps = {
  children?: React.ReactNode;
  className?: string;
};

const MenuContainer = ({ children, className }: DropdownMenuProps) => {
  return (
    <ul className={cn(styles.menu, className)}>
      {children}
    </ul>
  );
};

export default MenuContainer;