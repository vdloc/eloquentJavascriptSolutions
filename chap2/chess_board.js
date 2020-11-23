const chessBoard = (width, height) =>
  Array(height)
    .fill(0)
    .reduce(
      (board, _, rowIndex) =>
        board +
        Array(width)
          .fill(0)
          .reduce(
            (row, _, colIndex) => row + ((colIndex + rowIndex) % 2 ? " " : "#"),
            ""
          ) +
        "\n",
      ""
    );
