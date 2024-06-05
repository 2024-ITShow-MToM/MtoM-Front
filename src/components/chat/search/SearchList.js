import React, { useState } from 'react';

import '../../../styles/common/Style.css';

import SearchItem from './SearchItem';

function SearchList() {
    const [selectedItemId, setSelectedItemId] = useState(null);

    const handleItemClick = (id) => {
        setSelectedItemId(id);
    };

    const items = ['3413', '3414'];

    return (
        <div>
            {selectedItemId ? (
                <SearchItem
                    id={selectedItemId}
                    onClick={handleItemClick}
                    isSelected={true}
                />
            ) : (
                items.map((id) => (
                    <SearchItem
                        key={id}
                        id={id}
                        onClick={handleItemClick}
                        isSelected={false}
                    />
                ))
            )}
        </div>
    );
}

export default SearchList;