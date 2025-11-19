import Loader from '../Loader/Loader';
import styles from './PageLoader.module.scss';
import cn from 'classnames';

type PageLoaderProps = {
  className?: string;
};

const PageLoader = ({ className }: PageLoaderProps) => {
  return (
    <div className={cn(styles.pageLoader, className)}>
      <Loader size={5}/>
    </div>
  );
};

export default PageLoader;