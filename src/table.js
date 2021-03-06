import React, { Component } from 'react';
const Table = ({ list, pattern, onDismiss }) => {
    <div>
        {list.filter(isSearched(pattern)).map(item =>
            <div>
                <span>
                    <a href={item.url}>{item.title}</a>
                </span>
                <span>{item.author}</span>
                <span>{item.num_comments}</span>
                <span>{item.points}</span>
                <span>
                    <Button
                        onClick={() => onDismiss(item.objectID)}
                    >
                        Отбросить
                    </Button>
                </span>
            </div>
        )}
    </div>
}

export default Table;