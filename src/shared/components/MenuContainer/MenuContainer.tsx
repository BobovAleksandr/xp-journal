import styles from './MenuContainer.module.scss';
import cn from 'classnames';

type MenuContainerProps = {
  children?: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLUListElement>;

const MenuContainer = ({ children, className, ...props }: MenuContainerProps ) => {
  return (
    <ul className={cn(styles.menu, className)} {...props}>
      {children}
    </ul>
  );
};

export default MenuContainer;