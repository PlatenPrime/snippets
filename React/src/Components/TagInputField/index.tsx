
import { FC, KeyboardEvent, useState } from "react";
import "./index.css"

interface TagInputProps {
    tags: string[];
  }
  

export const TagInput: FC<TagInputProps> = ({ tags }  ) => {
    const [tagData, setTagData] = useState(tags);

    const removeTagData = (indexToRemove: number) => {
        setTagData([...tagData.filter((_, index) => index !== indexToRemove)]);
    };

    const addTagData = (event: KeyboardEvent<HTMLInputElement>) => {
        const target = event.target as HTMLInputElement;
        if (target.value !== '') {
            setTagData([...tagData, target.value]);
            target.value = '';
        }
    };

    return (
        <div className="tag-input">
            <ul className="tags">
                {tagData.map((tag: string, index: number) => (
                    <li key={index} className="tag">
                        <span className="tag-title">{tag}</span>
                        <span
                            className="tag-close-icon"
                            onClick={() => removeTagData(index)}
                        >
                            x
                        </span>
                    </li>
                ))}
            </ul>
            <input
                type="text"
                onKeyUp={event => (event.key === 'Enter' ? addTagData(event) : null)}
                placeholder="Press enter to add a tag"
            />
        </div>
    );
};