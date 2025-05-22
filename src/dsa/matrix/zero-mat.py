# Brute Force Approach

# def change_row(matrix, i, n):
#     for j in range(n):
#         if matrix[i][j] != 0:
#             matrix[i][j] = -1

# def change_col(matrix, j, m):
#     for i in range(m):
#         if matrix[i][j] != 0:
#             matrix[i][j] = -1

# def zero_matrix(matrix, m, n):

#     for i in range(m):
#         for j in range(n):
#             if matrix[i][j] == 0:
#                 change_row(matrix, i, n)
#                 change_col(matrix, j, m)

#     for i in range(m):
#         for j in range(n):
#             if matrix[i][j] == -1:
#                 matrix[i][j] = 0

#     return matrix

# matrix = [[1, 1, 1], [1, 0, 1], [1, 1, 1]]
# m = len(matrix)
# n = len(matrix[0])
# print(zero_matrix(matrix, m, n))


# Better Approach

def zero_matrix_better(matrix, m, n):
    row = [0] * m
    col = [0] * n

    for i in range(m):
        for j in range(n):
            if matrix[i][j] == 0:
                row[i] = 1
                col[j] = 1

    for i in range(m):
        for j in range(n):
            if row[i] | col[j]:
                matrix[i][j] = 0

    return matrix

matrix = [[1, 1, 1, 1], [1, 0, 0, 1], [1, 1, 0, 1], [1, 1, 1, 1]]
m = len(matrix)
n = len(matrix[0])
print(zero_matrix_better(matrix, m, n))
