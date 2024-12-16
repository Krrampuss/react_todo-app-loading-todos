import cn from 'classnames';
import { Todo } from '../types/Todo';

enum FilterName {
  'ALL',
  'COMPLETED',
  'ACTIVE',
}

type Props = {
  activeTodos: number;
  filteredBy: FilterName;
  setFilteredBy: (FilterName: FilterName) => void;
  todos: Todo[];
};

export const Footer: React.FC<Props> = ({
  activeTodos,
  filteredBy,
  setFilteredBy,
  todos,
}) => {
  return (
    <footer className="todoapp__footer" data-cy="Footer">
      <span className="todo-count" data-cy="TodosCounter">
        {activeTodos} items left
      </span>

      <nav className="filter" data-cy="Filter">
        <a
          href="#/"
          className={cn('filter__link', {
            selected: filteredBy === FilterName.ALL,
          })}
          data-cy="FilterLinkAll"
          onClick={() => setFilteredBy(FilterName.ALL)}
        >
          All
        </a>

        <a
          href="#/active"
          className={cn('filter__link', {
            selected: filteredBy === FilterName.ACTIVE,
          })}
          data-cy="FilterLinkActive"
          onClick={() => setFilteredBy(FilterName.ACTIVE)}
        >
          Active
        </a>

        <a
          href="#/completed"
          className={cn('filter__link', {
            selected: filteredBy === FilterName.COMPLETED,
          })}
          data-cy="FilterLinkCompleted"
          onClick={() => setFilteredBy(FilterName.COMPLETED)}
        >
          Completed
        </a>
      </nav>

      <button
        type="button"
        className="todoapp__clear-completed"
        data-cy="ClearCompletedButton"
        disabled={todos.length === activeTodos}
      >
        Clear completed
      </button>
    </footer>
  );
};
