const request = async (prompt: string) => {
    const res = await fetch(`${process?.env?.GEMINI_API_URL}?key=${process?.env?.GEMINI_API_KEY}`, {
        method: "POST",
        body: JSON.stringify({
            contents: [
                {
                    parts: [
                        {
                            text: prompt
                        }
                    ]
                }
            ]
        })
    });

    const json = await res.json();

    return json.candidates[0]?.content?.parts[0]?.text || "Não entendi a pergunta, pode repetir?";
}

export { request };
