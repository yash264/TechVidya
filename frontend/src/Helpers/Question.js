import React from "react";

function Question({ data, selected, onAnswer }) {
    return (
        <div className="question">
            <h3>{data.question}</h3>
            {data.options.map((opt, i) => (
                <button
                    key={i}
                    className={selected === opt ? "selected" : ""}
                    onClick={() => onAnswer(opt)}
                >
                    {opt}
                </button>
            ))}

            <fieldset className="space-y-3">
                <legend className="sr-only">Delivery</legend>

                <div>
                    <label
                        htmlFor="DeliveryStandard"
                        className="flex items-center justify-between gap-4 rounded border border-gray-300 bg-white p-3 text-sm font-medium shadow-sm transition-colors hover:bg-gray-50 has-checked:border-blue-600 has-checked:ring-1 has-checked:ring-blue-600"
                    >
                        <div>
                            <p className="text-gray-700">Standard</p>

                            <p className="text-gray-900">Free</p>
                        </div>

                        <input
                            type="radio"
                            name="DeliveryOption"
                            value="DeliveryStandard"
                            id="DeliveryStandard"
                            className="size-5 border-gray-300"
                            checked
                        />
                    </label>
                </div>

                <div>
                    <label
                        htmlFor="DeliveryPriority"
                        className="flex items-center justify-between gap-4 rounded border border-gray-300 bg-white p-3 text-sm font-medium shadow-sm transition-colors hover:bg-gray-50 has-checked:border-blue-600 has-checked:ring-1 has-checked:ring-blue-600"
                    >
                        <div>
                            <p className="text-gray-700">Next Day</p>

                            <p className="text-gray-900">£9.99</p>
                        </div>

                        <input
                            type="radio"
                            name="DeliveryOption"
                            value="DeliveryPriority"
                            id="DeliveryPriority"
                            className="size-5 border-gray-300"
                        />
                    </label>
                </div>
            </fieldset>

        </div>
    );
}

export default Question;
