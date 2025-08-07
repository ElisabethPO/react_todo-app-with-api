import React from 'react';
import { Todo } from './types/Todo';
import { Filter } from './types/Filter';
import classNames from 'classnames';

interface Props {
  filter: Filter;
  todos: Todo[];
  setFilter: (filter: Filter) => void;
  handleClearCompleted: () => void;
}

export const Footer: React.FC<Props> = ({
  filter,
  todos,
  setFilter,
  handleClearCompleted,
}) => {
  const activeTodos = todos.filter(todo => !todo.completed).length;
  const completedTodos = todos.filter(todo => todo.completed).length;

  if (todos.length === 0) {
    return null;
  }

  return (
    <footer className="todoapp__footer" data-cy="Footer">
      <span className="todo-count" data-cy="TodosCounter">
        {activeTodos} items left
      </span>

      <nav className="filter" data-cy="Filter">
        <a
          href="#/"
          className={classNames('filter__link', {
            selected: filter === Filter.All,
          })}
          onClick={e => {
            e.preventDefault();
            setFilter(Filter.All);
          }}
          data-cy="FilterLinkAll"
        >
          All
        </a>

        <a
          href="#/"
          className={classNames('filter__link', {
            selected: filter === Filter.Active,
          })}
          onClick={e => {
            e.preventDefault();
            setFilter(Filter.Active);
          }}
          data-cy="FilterLinkActive"
        >
          Active
        </a>

        <a
          href="#/"
          className={classNames('filter__link', {
            selected: filter === Filter.Completed,
          })}
          onClick={e => {
            e.preventDefault();
            setFilter(Filter.Completed);
          }}
          data-cy="FilterLinkCompleted"
        >
          Completed
        </a>
      </nav>

      <button
        type="button"
        className="todoapp__clear-completed"
        data-cy="ClearCompletedButton"
        onClick={handleClearCompleted}
        disabled={completedTodos === 0}
      >
        Clear completed
      </button>
    </footer>
  );
};
