import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';

const Kanban = () => {
    const tasks = [
        { id: '1', content: 'Task 1' },
        { id: '2', content: 'Task 2' },
        { id: '3', content: 'Task 3' },
        // Add more tasks here
    ];

    const onDragEnd = ({ result }) => {
        // Handle drag and drop functionality
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">Kanban Board</h1>
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="tasks">
                    {(provided) => (
                        <div {...provided.droppableProps} ref={provided.innerRef}>
                            {tasks.map((task, index) => (
                                <Draggable key={task.id} draggableId={task.id} index={index}>
                                    {(provided) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            className="p-2 mb-2 bg-white rounded shadow"
                                        >
                                            {task.content}
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    );
};

export default Kanban;
