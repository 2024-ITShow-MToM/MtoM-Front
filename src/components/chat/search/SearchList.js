import React, { useState } from 'react';

import '../../../styles/common/Style.css';

import SearchItem from './SearchItem';

function SearchList({ user, setSelected }) {
    const [selectedItemId, setSelectedItemId] = useState(null);

    const handleItemClick = (id) => {
        setSelectedItemId(id);
        setSelected(true);
    };

    return (
        <div>
            {
                user.length > 0 ? (
                    selectedItemId ? (
                        <SearchItem
                            id={selectedItemId}
                            onClick={handleItemClick}
                            isSelected={true}
                            data={user.find(item => item.userId === selectedItemId)}
                        />
                    ) : (
                        user.map((item, index) => (
                            <SearchItem
                                key={index}
                                id={item.userId}
                                onClick={handleItemClick}
                                isSelected={false}
                                data={item}
                            />
                        ))
                    )
                ) : (
                    <p style={{ margin: '1% 7%', color: '#595959', fontWeight: '400' }}>검색결과 없습니다.</p>
                )
            }
        </div>
    );
}

export default SearchList;